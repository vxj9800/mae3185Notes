# Code Examples
## Print the elapsed time since the &mu;C started
Following code prints out the time passed since the code started running on the microcontroller. Note that a `sleep_ms()` function is used in the `setup()` function to stall the &mu;C at that line for 10 seconds. Make sure that you can connect to the &mu;C during that time through Putty or Coolterm. Otherwise, you may miss the output.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/timer.h>

void setup()
{
    stdio_init_all();
    sleep_ms(10000);
}

void loop()
{
    // Get the lower 32-bit value of `CTR` register and print it
    uint32_t t32 = time_us_32();
    printf("%u\r\n", t32);
    sleep_ms(100);

    // Get complete 64-bit `CTR` value and print it
    uint64_t t64 = time_us_64();
    printf("%lu\r\n", t64);
    sleep_ms(200);

    // Get omplete 64-bit `CTR` value as absolute_time_t.
    // Since you cannot print absolute_time_t, convert it to uint64_t and print it.
    absolute_time_t tAbs = get_absolute_time();
    t64 = to_us_since_boot(tAbs);
    printf("%lu\r\n", t64);
    sleep_ms(300);

    // Create a time value in future.
    // Keep checking whether the value is reached or not
    tAbs = make_timeout_time_us(400000);
    while(!time_reached(tAbs))
    {
        printf("%luus has not elapsed since the code started running.", to_us_since_boot(tAbs));
        sleep_ms(100);
    }
    printf("%luus has passed since the code started running.", time_us_64());
}

int main()
{
    setup();
    while (true)
        loop();
}
```