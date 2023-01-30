# General Purpose Input Output
GPIOs are nothing but digital input/output pins, the state of which can be controlled directly by the software running on the processors, or by a number of other peripherals available in the &mu;C. As discussed in previous chapters, the RP2040 &mu;C has 30 GPIOs, out of which 4 can also be used as inputs to the chip's Analogue to Digital Converter (ADC). Each GPIO in RP2040 can perform a specific function of a specific peripheral. Following table lists the function that each GPIO can perform for each peripheral that we may discuss throughout this course. Full table is available [here](https://raspberrypi.github.io/pico-sdk-doxygen/group__hardware__gpio.html).
```{table}
| GPIO\\Func     | 1        | 2         | 3        | 4      | 5   |
|:--------------:|:--------:|:---------:|:--------:|:------:|:---:|
| 0              | SPI0 RX  | UART0 TX  | I2C0 SDA | PWM0 A | SIO |
| 1              | SPI0 CSn | UART0 RX  | I2C0 SCL | PWM0 B | SIO |
| 2              | SPI0 SCK | UART0 CTS | I2C1 SDA | PWM1 A | SIO |
| 3              | SPI0 TX  | UART0 RTS | I2C1 SCL | PWM1 B | SIO |
| 4              | SPI0 RX  | UART1 TX  | I2C0 SDA | PWM2 A | SIO |
| 5              | SPI0 CSn | UART1 RX  | I2C0 SCL | PWM2 B | SIO |
| 6              | SPI0 SCK | UART1 CTS | I2C1 SDA | PWM3 A | SIO |
| 7              | SPI0 TX  | UART1 RTS | I2C1 SCL | PWM3 B | SIO |
| 8              | SPI1 RX  | UART1 TX  | I2C0 SDA | PWM4 A | SIO |
| 9              | SPI1 CSn | UART1 RX  | I2C0 SCL | PWM4 B | SIO |
| 10             | SPI1 SCK | UART1 CTS | I2C1 SDA | PWM5 A | SIO |
| 11             | SPI1 TX  | UART1 RTS | I2C1 SCL | PWM5 B | SIO |
| 12             | SPI1 RX  | UART0 TX  | I2C0 SDA | PWM6 A | SIO |
| 13             | SPI1 CSn | UART0 RX  | I2C0 SCL | PWM6 B | SIO |
| 14             | SPI1 SCK | UART0 CTS | I2C1 SDA | PWM7 A | SIO |
| 15             | SPI1 TX  | UART0 RTS | I2C1 SCL | PWM7 B | SIO |
| 16             | SPI0 RX  | UART0 TX  | I2C0 SDA | PWM0 A | SIO |
| 17             | SPI0 CSn | UART0 RX  | I2C0 SCL | PWM0 B | SIO |
| 18             | SPI0 SCK | UART0 CTS | I2C1 SDA | PWM1 A | SIO |
| 19             | SPI0 TX  | UART0 RTS | I2C1 SCL | PWM1 B | SIO |
| 20             | SPI0 RX  | UART1 TX  | I2C0 SDA | PWM2 A | SIO |
| 21             | SPI0 CSn | UART1 RX  | I2C0 SCL | PWM2 B | SIO |
| 22             | SPI0 SCK | UART1 CTS | I2C1 SDA | PWM3 A | SIO |
| 23             | SPI0 TX  | UART1 RTS | I2C1 SCL | PWM3 B | SIO |
| 24             | SPI1 RX  | UART1 TX  | I2C0 SDA | PWM4 A | SIO |
| 25             | SPI1 CSn | UART1 RX  | I2C0 SCL | PWM4 B | SIO |
| 26             | SPI1 SCK | UART1 CTS | I2C1 SDA | PWM5 A | SIO |
| 27             | SPI1 TX  | UART1 RTS | I2C1 SCL | PWM5B  | SIO |
| 28             | SPI1 RX  | UART0 TX  | I2C0 SDA | PWM6 A | SIO |
| 29             | SPI1 CSn | UART0 RX  | I2C0 SCL | PWM6 B | SIO |
```
The actual working of a GPIO pin requires understanding of how a transistor works. Thus, this chapter will attempt to explain working of a GPIO in a much simpler way. However, keep in mind that this simplified explanation is not really true.
```{tableofcontents}
```