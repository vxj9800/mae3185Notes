# Code Examples
## I<sup>2</sup>C communication between the &mu;C and an [MCP9808](https://ww1.microchip.com/downloads/en/DeviceDoc/25095A.pdf) temperature sensor
Following code configures `i2c0` on the &mu;C to work in standard mode, i.e. at 100 kb/s baud rate. Then it communicates with the [MCP9808](https://ww1.microchip.com/downloads/en/DeviceDoc/25095A.pdf) temperature sensor to receive a 2 byte long temperature value and converts it into a value with &deg;C unit.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/i2c.h>

#define SCL 1   // Define GPIO for i2c0 SCL line
#define SDA 0   // Define GPIO for i2c0 SDA line

#define TMP_ADD 0x18    // Define the target address of the temperature sensor

void setup()
{
    stdio_init_all();

    // Setup  GPIOs to work with I2C
    gpio_init(SCL);
    gpio_init(SDA);
    gpio_set_pulls(SCL, 1, 0);
    gpio_set_pulls(SDA, 1, 0);

    gpio_set_function(SCL, GPIO_FUNC_I2C);
    gpio_set_function(SDA, GPIO_FUNC_I2C);

    i2c_init(i2c0, 100000); // Initialize i2c0 and set the speed to 100 kb/s
}

void loop()
{
    uint8_t cmd[1] = {0x5};     // Create an array to hold the data to be written to the target.
    uint8_t tmp[2] = {0, 0};    // Create an array to hold the temperature reading received from the target. All elements are initialized to 0 as a precaution.

    float temp = 0;     // Create a variable to hold temperature value in degC unit.

    i2c_write_blocking(i2c0, TMP_ADD, cmd, 1, 0);   // Write the command/register 0x5 to the target
    i2c_read_blocking(i2c0, TMP_ADD, tmp, 2, 0);    // Read 2 byte long temperature value from the target

    // Convert temperature value to degC units. Take a look at pg. 25 of the sensor datasheet
    tmp[0] = tmp[0] & 0x1F; // Clear flag bits
    if ((tmp[0] & 0x10) == 0x10)
    {                           // TA < 0 degC
        tmp[0] = tmp[0] & 0x0F; // Clear SIGN
        temp = 256 - (tmp[0] * 16.0 + tmp[1] / 16.0);
    }
    else // TA > 0 degC
        temp = (tmp[0] * 16.0 + tmp[1] / 16.0);
    printf("%f\r\n", temp);
    sleep_ms(100);
}

int main()
{
    setup();
    while (true)
        loop();
}
```