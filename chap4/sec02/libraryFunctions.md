# `hardware_gpio` Library Functions
All the GPIOs in the &mu;C are set to Input Pull-Down configuration during power up by default. To use this library, add following to the C/C++ file,
```c++
#include <hardware/gpio.h>
```
and following to the `CMakeLists.txt` file.
```cmake
target_link_libraries(projectName pico_stdlib hardware_gpio)
```

Following are some of the most commonly used functions for configuring the &mu;C.

## `gpio_init(pinNo)`
This function initializes a GPIO to the peripheral function SIO (Single-Cycle IO). This function is similar to controlling a GPIO directly. However, this peripheral allows the processor to switch GPIO states in a single clock cycle.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.

## `gpio_set_dir(pinNo, dir)`
This function configures a GPIO to Input or Output.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.
- Function input `dir` must be a boolean value, i.e. `0` or `false` for Input and `1` or `true` for Output.

## `gpio_put(pinNo, outVal)`
This function drives a GPIO to High or Low if it is configured as an Output.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.
- Function input `outVal` must be a boolean value, i.e. `0` to drive GPIO Low and `1` to drive GPIO High.

## `gpio_set_pulls(pinNo, pUp, pDown)`
This function enables or disables pull-down or pull-up resistors if the GPIO is configured as an Input.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.
- Function input `pUp` must be a boolean value, i.e. `0` to disable and `1` to enable the pull-up resistor.
- Function input `pDown` must be a boolean value, i.e. `0` to disable and `1` to enable the pull-down resistor.

## `gpio_set_function(pinNo, func)`
This function sets up the state of the GPIO to be controlled by a specific peripheral as discussed in the table.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.
- Function input `func` must be an unsigned integer value from the table. Necessary constants representing different functions are already defined in the SDK as follows, `GPIO_FUNC_SPI = 1`, `GPIO_FUNC_UART = 2`, `GPIO_FUNC_I2C = 3`, `GPIO_FUNC_PWM = 4`,`GPIO_FUNC_SIO = 5`.