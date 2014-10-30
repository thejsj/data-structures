# Performance Report

### Comprarisson between different inheritance styles

When comparing the different styles implemented, we discovered that the prototypal style was the fastest with a total test time of 241.4ms followed by pseudoclassical, functional, and functional-shared with a total time of 255.8ms, 386.0ms, and 632.1ms respectively. The test used to measure the speed of the styles consisted of 50,000 instances.

### Analysis of different methods

In all in inheritance styles, the dequeue method is the slowest. This operation took between 29.5% to 58.8% of the total testing period. The reason for this seems to be the need to shift all values to a new location.
