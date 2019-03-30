import serial

port_name = '/dev/ttyACM0'
with serial.Serial(port_name, 9600, timeout=1) as ser:
    while True:
        line = ser.readlines()
        if len(line) > 0:
            output = line[0].decode('utf-8').split(':')
            if output[0] == 't':
                print("{:.2f}".format(float(output[1])))
