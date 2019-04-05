import serial
import json
import requests

port_name = '/dev/ttyACM0'
with serial.Serial(port_name, 9600, timeout=1) as ser:
    while True:
        line = ser.readlines()
        if len(line) > 0:
            output = line[0].decode('utf-8').split(':')
            if output[0] == 't':
                print("{:.2f}".format(float(output[1])))

                json_data = json.dumps({'temperature': "{:.2f}".format(float(output[1]))})

                post_header = {"Content-type": "application/json"}

                r = requests.put('http://webapp:3000/api/temp',
                                  data=json_data,
                                  headers=post_header)

                print(r.status_code, r.reason)

