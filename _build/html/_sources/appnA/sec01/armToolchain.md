# Arm Toolchain
A toolchain is a set of programming tools, like a compiler, linker, debugger, etc., that facilitate development of programs written for the same or different hardware. The Raspberry Pi Pico has RP2040 onboard which is a microcontroller based on Arm Cortex M0+ architecture. The detailed steps for installing [GNU Embedded Toolchain for Arm](https://developer.arm.com/downloads/-/gnu-rm) in each operating system are as follows.

## Windows/Linux
- Open Ubuntu terminal.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/ubuntu/openTerminal/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/ubuntu/openTerminal/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/ubuntu/openTerminal/3.png)
    ```
    ```{tab-item} 4
    ![4](./figs/ubuntu/openTerminal/4.png)
    ```
    ````
- Enter following one line at a time to install . The `$` sign represents the start of the line so don't include it. You may need to enter the password.
    ```bash
    $ sudo apt update
    $ sudo apt upgrade
    $ sudo apt install cmake gcc-arm-none-eabi libnewlib-arm-none-eabi build-essential
    $ exit
    ```

## MacOS
- Open terminal app.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/mac/openTerminal/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/mac/openTerminal/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/mac/openTerminal/3.png)
    ```
    ```{tab-item} 4
    ![4](./figs/mac/openTerminal/4.png)
    ```
    ````
- Check if your MacBook has Apple chip or Intel chip.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/mac/checkProcessor/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/mac/checkProcessor/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/mac/checkProcessor/3.png)
    ```
    ````
- If your MacBook has Apple chip then enter following commands in the terminal, continue to the next step otherwise.
    ```bash
    $ /usr/sbin/softwareupdate --install-rosetta --agree-to-license
    ```
- Install 'Xcode Command Line Tools' and 'Homebrew' by entering following command in the terminal. You may be prompted to provide password and press enter some point.
    ```bash
    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ```
- Follow the images below to add Homebrew to the `PATH` enironment.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/mac/brewExportPath/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/mac/brewExportPath/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/mac/brewExportPath/3.png)
    ```
    ```{tab-item} 4
    ![4](./figs/mac/brewExportPath/4.png)
    ```
    ```{tab-item} 5
    ![5](./figs/mac/brewExportPath/5.png)
    ```
    ````
- Finally, enter following commands in the terminal app to install the 'Embedded Toolchain for Arm'.
    ```bash
    $ brew install cmake
    $ brew tap ArmMbed/homebrew-formulae
    $ brew install arm-none-eabi-gcc
    ```
- Restart your MacBook.
Note that [CMake](https://cmake.org/) was also installed along with the Arm toolchain. [CMake](https://cmake.org/) will take care of calling all the necessary programs, from the toolchain, to generate a binary file that will run on the microcontroller.