# Code Examples
Let's look at an example to understand usage of some of the `hardware_gpio` library functions. The Raspberry Pi Pico board has a green LED already connected to GPIO 25. Following code configures GPIO 25 as an output and turns the LED on.
```c++
#include <pico/stdlib.h>
#include <hardware/gpio.h>

#define LED_PIN 25                  // Define a pin number macro to use it throughout the code

int main()
{
    gpio_init(LED_PIN);             // Initialize GPIO 25 to the default state
    gpio_set_dir(LED_PIN, true);    // Configure GPIO 25 as an output
    gpio_put(LED_PIN, true);        // Drive GPIO 25 to High

    while (true);
}
```