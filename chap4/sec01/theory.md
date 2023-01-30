# GPIO States
```{figure} ./figs/ucOut.svg
---
figclass: margin
---
GPIO Junction on &mu;C Side vs the Physical Pin
```
As the name suggests, a GPIO can broadly be configured either as an **Input** or as an **Output**. Keep in mind that the terms 'Input' and 'Output' here represent the direction of information transfer instead of the direction of the current flow. To make understanding different configurations easier, consider figure to the right.

In the figure, think of the &EmptySmallSquare; as the physical pin where a wire from some external circuit may be connected. While, the &#x25CF; represents a junction on the &mu;C side. The &mu;C may make different connections at this junction based on the configuration.

## GPIO Output
```{figure} ./figs/ucOutLow.svg
---
figclass: margin
---
GPIO Config: Output Low
```
```{figure} ./figs/ucOutHigh.svg
---
figclass: margin
---
GPIO Config: Output High
```
In this configuration, a GPIO is either driven LOW or driven HIGH, i.e. it is connected to 0V/GND or 3.3V on the &mu;C side. Figures on the right shows the connections the &mu;C makes to the junction. The **Output** configuration is also known as a *Push-Pull* configuration in technical terms. There other output configurations called *Open-Drain* and *Open-Collector* which are not discussed here and will not be used throughout this course.

Note that if a GPIO is configured as an output Low and 3.3V is connected to the physical pin then a short circuit is created. Similarly, a short circuit is also created when a GPIO is configured as an output High and 0V/GND is connected to the physical pin. Both of these situations are highly discouraged since the high current flow due to the short circuit may damage the &mu;C.
```{attention}
Make sure you are not creating a short circuit when a GPIO is configured as an output.
```

## GPIO Input
In this configuration of the GPIO, the &mu;C measures the voltage at the junction with reference to the GND. To be more specific, a GPIO can have three different input configurations.
```{figure} ./figs/ucOut.svg
---
figclass: margin
---
GPIO Config: Input Floating
```
### Floating
In this configuration, the &mu;C measures voltage at the junction without connecting anything else to the junction as shown in the figure to the right. Thus, if the voltage on the physical pin is 3.3V then the &mu;C reads it as `1` or High. Or, if the voltage on the physical pin is 0V/GND then the &mu;C reads it as `0` or Low. 

The &mu;C is extremely sensitive to the voltage changes. Thus, if nothing is connected to the physical pin, i.e. the pin is in floating state, then touching the physical pin with your finger can change the voltage reading. Other two configurations exist to tackle this exact problem.
```{figure} ./figs/ucOutPd.svg
---
figclass: margin
---
GPIO Config: Input Pull-Down
```
### Pull-Down
In this configuration, 0V/GND is connected to the junction through a huge resistor (~65k&Omega;), known as a pull-down resistor, before the &mu;C measures the voltage at the junction, as shown in the figure. Same as the floating input, if the voltage on the physical pin is 3.3V or 0V/GND then the &mu;C reads it as `1` or `0` respectively. However, if the physical pin is floating, then the &mu;C would read `0`. This is because the junction is connected to GND through the resistor.
```{note}
Pull-Down and Pull-Up input methods work fine only if there is no resistor before the physical pin larger than the pull-down/pull-up resistors. Think about the voltage drop in the case of two series resistors.
```
```{figure} ./figs/ucOutPu.svg
---
figclass: margin
---
GPIO Config: Input Pull-Up
```
### Pull-Up
Similar to Pull-Down configuration, 3.3V is connected to the junction, instead of 0V, through a huge resistor (~65k&Omega;), known as a pull-up resistor, before the &mu;C measures the voltage at the junction. Once again, similar to the floating input, if the voltage on the physical pin is 3.3V or 0V/GND then the &mu;C reads it as `1` or `0` respectively. However, if the physical pin is floating, then the &mu;C would read `1` since the junction is connected to 3.3V through the resistor.