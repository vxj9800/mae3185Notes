# &mu;C-Laptop Communication
We learned how to upload a compiled binary to the &mu;C in the last section. Specifically, a code that would print `Hello World!` to the 'Standard Input Output' was uploaded. You might be wondering how we can see this output from the &mu;C. Following subsections show steps on how to do exactly that using a software called '[CoolTerm](https://freeware.the-meiers.org/)' on both Windows and Mac devices.

## MacOS

## Windows
- Download CoolTerm from [this](https://freeware.the-meiers.org/) website. The 'Intel 64Bit' version should work for most Windows 10/11 users as shown below.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/downloadCoolTerm/1.png)
    ```
    ````
- Open the downloaded `CoolTermWin64Bit.zip` file. Copy the folder `CoolTermWin64Bit` to wherever you like.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/extractCoolTerm/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/windows/extractCoolTerm/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/windows/extractCoolTerm/3.png)
    ```
    ```{tab-item} 4
    ![4](./figs/windows/extractCoolTerm/4.png)
    ```
    ````
- Run CoolTerm, make sure that the &mu;C is not connected to the computer. Windows may not recognize the app. In that case, you may have to force run the app as shown below.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/runCoolTerm/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/windows/runCoolTerm/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/windows/runCoolTerm/3.png)
    ```
    ```{tab-item} 4
    ![4](./figs/windows/runCoolTerm/4.png)
    ```
    ```{tab-item} 5
    ![5](./figs/windows/runCoolTerm/5.png)
    ```
    ```{tab-item} 6
    ![6](./figs/windows/runCoolTerm/6.png)
    ```
    ````
- Note the currently available 'COM' port numbers by following the steps below. In my case, there are three COM ports available, i.e. COM1, COM3 and COM4.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/noteComPorts/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/windows/noteComPorts/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/windows/noteComPorts/3.png)
    ```
    ````
- Connect the &mu;C to the computer without pressing the `BOOTSEL` button. Now, re-scan the COM ports so that the &mu;C is detected.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/rescanComPorts/1.png)
    ```
    ```{tab-item} 2
    ![2](./figs/windows/rescanComPorts/2.png)
    ```
    ```{tab-item} 3
    ![3](./figs/windows/rescanComPorts/3.png)
    ```
    ````
- Check for the available COM ports again. You should see a new COM port in the list. Note the newly added COM port number, since it should stay the same in your computer for your &mu;C. In my case, it turned out to be COM5 as visible in the image below. Select the newly added COM port.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/newComPort/1.png)
    ```
    ````
- Click on <kbd>&rlarr; Connect</kbd> button to start communication between the &mu;C and the computer. You should see 'Hello World!' being printed out as shown below.
    ````{tab-set}
    ```{tab-item} 1
    ![1](./figs/windows/connect/1.png)
    ```
    ````
- You can stop the communication by clicking on the <kbd>Disconnect</kbd> button.
- At the time of closing CoolTerm, it may ask you to save the settings. Click on <kbd>Don't Save</kbd> button.