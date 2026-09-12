# Guide and Support

Open the header help button or expand **사용 가이드 및 지원** for the nine-step guide, micro:bit examples, UART format and troubleshooting.

The guide never starts, stops, clears or exports data automatically. Connect first, then press Start to record. Stop preserves records. Charts show the latest 100 records; Excel includes all recorded sensor values, including unchecked sensors. Export before clearing or reloading the page.

Source: https://boundaryx.io/ai/?bmode=view&idx=172676340&t=board

## UART example

The [current example](https://makecode.microbit.org/_WxPJoHfv2Rc5) sends TEMP, LIGHT, ACCX, ACCY, ACCZ, SOUND and HEAD. Separate `key=value` pairs with semicolons, then append an actual newline. A trailing semicolon is not required. `bluetooth.uartWriteString()` does not append the newline automatically. Sensor keys are case-sensitive.
