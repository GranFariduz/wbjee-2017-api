from bs4 import BeautifulSoup
import json

soup = BeautifulSoup(open('pile.html'), 'html.parser')
all_rows = soup.find_all('tr')

iter_rows = iter(all_rows)
next(iter_rows)
next(iter_rows)
next(iter_rows)

# for removing unnecessary white space
def s_r(string):
    string = string.replace('\/', ' / ')
    return " ".join(string.split())

output = []

for row in iter_rows:
    college_name = row.contents[1].get_text()
    college_branch = row.contents[3].get_text()

    obc_or = row.contents[29].get_text()
    obc_cr = row.contents[31].get_text()

    gen_or = row.contents[5].get_text()
    gen_cr = row.contents[7].get_text()
        

    data = {
        'name': s_r(college_name),
        'branch': s_r(college_branch),
        'gen_or': s_r(gen_or),
        'gen_cr': s_r(gen_cr),
        'obc_or': s_r(obc_or),
        'obc_cr': s_r(obc_cr),
    }
    
    output.append(data)


with open('colleges.json', 'a') as file:
    json.dump(output, file)
