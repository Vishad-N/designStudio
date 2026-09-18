import os
from rembg import remove, new_session

session = new_session("u2netp")
for file in os.listdir('.'):
    if file.startswith('chair-') and file.endswith('.jpg'):
        input_path = file
        output_path = file.replace('.jpg', '.png')
        with open(input_path, 'rb') as i:
            with open(output_path, 'wb') as o:
                input_data = i.read()
                output_data = remove(input_data, session=session)
                o.write(output_data)
        print(f"Processed {file}")
