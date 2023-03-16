# `hardware_timer` Library Functions
To use this library, add following to the C/C++ file,
```c++
#include <hardware/timer.h>
```
and following to the `CMakeLists.txt` file.
```cmake
target_link_libraries(projectName pico_stdlib hardware_gpio hardware_timer)
```

Following are some of the most commonly used functions for configuring and using the I<sup>2</sup>C peripheral.

## `uint32_t time_us_32()`
Function returns the lower 32-bits of the 64-bit `CTR` value as an unsigned integer. Note that this value will overflow every 2<sup>32</sup>/1000000 = 4294.9673 seconds &cong; 71 minutes.

## `uint64_t time_us_64()`
Function returns the 64-bit `CTR` value as a 64-bit unsigned integer.

## `absolute_time_t get_absolute_time()`
Function returns the 64-bit `CTR` value as a custom datatype `absolute_time_t`. Apart from the custom datatype, this function is exactly same as `time_us_64()`.

## `uint64_t to_us_since_boot(absolute_time_t t)`
Convert 64-bit time value from `absolute_time_t` datatype to `uint64_t` datatype.

## `absolute_time_t from_us_since_boot(uint64_t us_since_boot)`
Convert 64-bit time value from `uint64_t` datatype to `absolute_time_t` datatype.

## `absolute_time_t make_timeout_time_us(uint64_t us)`
This function gets current 64-bit `CTR` value, adds `us` to it and returns the result as `absolute_time_t`. Basically, this function returns a time value `us` microseconds in the future as `absolute_time_t` datatype.

## `bool time_reached(absolute_time_t t)`
Check whether the &mu;C has been on for `t` microseconds or not. In other words, whether the `CTR` value has crossed the 64-bit value represented by the input `t`.