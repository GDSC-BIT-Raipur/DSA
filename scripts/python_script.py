import os
import subprocess

def convert_ipynb_to_markdown(directory_path,):
    for root, _, files in os.walk('.'):
        for file in files:
            if file.endswith(".ipynb"):
                ipynb_path = os.path.join(root, file)
                markdown_dir = remove_text_after_last_backslash(ipynb_path.replace('code',"docs"))
                print(markdown_dir)
                create_folder_at_file_path(markdown_dir)
                markdown_path = convert_backslash_to_forwardslash(ipynb_path.replace('code',"docs").replace("ipynb","md"))
                ipynb_path = convert_backslash_to_forwardslash(ipynb_path)
                markdown_path = "../"*count_subdirectories(ipynb_path)+markdown_path     
                conversion_command = "python -m nbconvert --to markdown {} --output {}".format(ipynb_path,markdown_path)
                subprocess.run(conversion_command, shell=True)

def create_folder_at_file_path(file_path):
 
    if not os.path.exists(file_path):
        os.makedirs(file_path)
        print(f"Folder '{file_path}' created.")
    # else:
    #     print(f"Folder '{file_path}' already exists.")
    
    return file_path

def remove_text_after_last_backslash(input_string):
    last_backslash_index = input_string.rfind('\\')
    if last_backslash_index != -1:
        result = input_string[:last_backslash_index]
        return result
    else:
        return input_string

def convert_backslash_to_forwardslash(input_string):
    return input_string.replace('\\', '/')

def count_subdirectories(path):
    return path.count('/') -1 



source_directory = '.'
convert_ipynb_to_markdown(source_directory)
