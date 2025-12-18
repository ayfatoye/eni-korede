# parse_guests.py
import json

s = """Table 1 (Groom Family High Table) 
Foluso Odeyemi 
Olagbaju Idowu
Ajagbe
Eniola Oyewande
Oladigbo
Oladigbo
Gbenga Eluyemi 
Hanna Abiola
Akinyele
Akinyele 

Table 2 (Bride Family High Table) 
Sunday Alaketu
Sunday Ibitoye 
Femi Ojikutu 
Olubunmi Akindele
Princess Adewunmi
Rotimi Asaolu  
Tolulope Aina 
Akinsola Fatoye
Kofoworola Fatoye

Table 3 Groom men 
Folajimi Solarin 
Jeffery Lan
Wale Babalola
Taiwo Ige
Isaac Okaa 
Jide Gbolade
Rahman Ibraheem 
Tolu Idowu 
Busayo Bolonduro
Chinedu Muoneke
Bisola Oladigbo

Table 4 Bridesmaids
Jasmine Diaz
Oluwatosin Oyekeye  
Elizabeth Onah 
Sharon Mburu
Deborah Ajijo
Ifeoluwa Elegbe 
Kparobo Olu-Okoro
Nero Olu-Okoro
Ogochukwu Anayor-Achu
Boluwatife Fatoye
Ayomide Fatoye 

Table 5 (Groom Family)
Azaad kohli
Temitope Kolawole-oni
Roland Elusanmi
Gbenga Eluobaju
Ronke Eluyemi 
Sunny Eluyemi
Bukky Eluyemi
Bumi Eluyemi
Taofeek Oladigbo
Fumi Oladigbo 
Muideen Ilesanmi 

Table 6 (Bride Mum Friends)
Zainab Aiyenimelo 
Lola Jimoh
Tunde Jimoh 
Femi Taiwo
Ola Taiwo 
Kunle Akindoju
Yetunde Akindoju
Seun Fayehun
Fayehun
Tope Alli 

Table 7 (Groom Family) 11
David Olagbaju
SAIDAT Lawal
Elujilo Bumi 
Alowooja Yomi 
Fagbo Bamidele  
Omisore Gbenga 
Ogunbemi Akin 
Arinola Ogunbemi 
Akinyele Wole 
Eniola Ayodele 
David Olagbaju


Table 8 Bride Mum Friends 
Olayiwola 
Olayiwola  
Emem Omeiza 
Godwin Omeiza 
Kuku
Sekinat Kuku
Tise Kuku
Tolani Aiyenimelo
Giwa Testimony 
Kudirat Manuel 


Table 9 (Couple Friends)
Michael Akinlonu 
Morenikeji
Samuel Oyekeye 
David Oyekeye 
Janet Akisanmi 
Derin Olatunde
Debola Olatunde
Toyosi Haruna
Seyi Oladeji
Treasure Ozemoya

Table 10 (Ayo/Bolu/Bisola Friends)
Andrew Chian 
Prithvi Patel 
Sara Estrada 
Quayvius Griswold 
Sebastian Oberg
Sydney Fletcher 
Ayo Mefful 
Lucrecia Olususi 
Lilian Koguingar
Lilian’s Koguingar

Table 11 (Jesus House Friends) 11
Nosi Ogundiran
Seun Ogundiran 
Idowu Dami 
Victoria Idowu 
Bami Odusote
Ayomide Olu-Ewulo
Ayomide Oluewulo
Wale Adeniruju 
Bimbo Adeniruju
Isaac Adeniruju
Sammi
David Adebowale

Table 12 (Bride Mum Friends) 
Abbey Adenrele 
Abiodun Dahusi
Yemi Ibitara 
Seun Omidiji  
Fehintola Oladele 
Bolaji Olateju 
Tosin Adeyemi 
Odun Olaode
Abiodun Ilesanmi 
Nike Oyelakin 

Table 13 (Amazon Friends)
Precious 
Idera Adenekan
Nike Adewale
Density Ugwu 
Arinze
Elder Tonye
Tonye
Mary Tonye
Taiwo Ayorinde
Genet Woldu 

Table 14 (Bride Family)
Jide Sowunmi 
Karimot Sanyaolu 
Mansoog
Muis Adenrele 
Tajudeen Isola-Gbenla
TJ Isola-Gbenla
Nosa Idemuda 
Abi Isola-Gbenla 
Olayinka Adeleye 
Yetunde Banjo 

Table 15 (Couple Friends)
Laci Rauch 
Feyikemi Ojo 
Omotola Anderson
TENIOLA Duduyemi 
Afolabi Duduyemi 
Fatou Mburu 
Seun Apelegan
Eleasa Paintsil 
Isaac Paintsil
Ugo Uchendu

Table 16 (Couple Friends)
Pearl Nwokeke
Prince Nwokeke
Mimi Onyekuru 
Chigozirim Wellington
Oyin Popoola
Naomi Dada 
Ayo Emmanuel 
Ore Ladoja
Girlsehense Tabi
Tamara Fiemotongha

Table 17 (Amazon Friends)
Fahima Haider 
Ezekiel Oso
Racheal Akinwale
Shade Abraham 
Nuru Opeloyeru 
Yunus Ahmodu 
Shola Eninle
Andrew Iriabe

Table 18 (Bride Family)
Abby Fabs 
Wumi Odesola
Kazeem Odesola 
Dara Odesola
Faheer Odesola
Ayo Odesola 
Adurayemi Osuntokun
Ope Nurudeen
Charity Legging
Wakui Fakoya

Table 19 (NLC Church Group)
Stephen
Portia
Mena Enahowo 
Emmanuel Enahowo
Runo Enahowo 
Rona Enahowo 
Oro Enahowo 
Sepiribo Young-Harry 
Jite Young-Harry
Florence Ogbon 


Table 20 (Bride Family) 
Adetoun Fakoya 
Sade Legging 
Seyi Benson 
Folushola Alaba 
Jide Agbaje 
Adebowale Iuwoye 
Olayiwola Onafisan 
Shina lahan
Omosebi Sunday

Table 21 (NLC Church Group) 
OJ Oluokoro
OJ Olu-okoro
Precious
Bayo Akinyemi
Akinyemi
Austin Ehwariemes 
Divine Ehwariemes 
Ochuko Ehwariemes 
Praise Ehwariemes
OLANREWAJU OLADEJI 
Olanrewaju Oladeji
Seyi Olabinri

Table 22 (Bride Family)
Sanni Ajayi 
Sanni Ajayi 
Lekan Onijingin 
Ishola-Gbeale 
Ishola-Gbeale
Jewel Nwoleocha
Olumuyiwa Owolabi
Yewande Owolabi 
Funmi Owolabi 
Dimeji Ajayi

Table 23 (Winner Chapel)
Tunde Oladipo
Bolatito
Chimna Orji 
Frank Ezeana 
Chinedu Ezeani 
Mary Olawoyin
Doyin Onifade 
Sharon Shusi
Joshua Agbonyeme

Table 24 ( Bride Family)
Gbenga Olaride 
Niyi Ajishebiolowo
Niyi Onifade
Wale Akintola  
Gbenga Anota
Olubunmi Adeleye 
Bolaji Ayemobola 
Olumide Fagbola 
Abidemi Fagbola
Endurance Ogianen

Table 25 ( Winner Chapel)
Bolaji Ola 
Olumide Asalu 
Asalu 
Judith Ogbodu
Abisoye Ogundipe 
Jonathan Ogundipe
Linda Iyare
Abisoye Adekoya 
Olugbenga Adekoya

Table 26 (Bride Family)
Enonbun 
Benedicta Enonbun
Tony Osondu
Folu Oguntoyinbo
Olatunde Oyegbami 
Ali Hasan 
BB Sanmi
Wole Atonlogun
Abimbola Taloba 
Qusim Oyebamiji

Table 27 (Winner Chapel)
Samuel Paul 
Beatrice Paul 
Chinyere Ehima 
Frank Ehima 
Taiwo Ola
Kemi Ogundare 
Charles Ogundare
Robinson Nzalie 
Joseph Karagbo 

Table 28 (Bride Family)
Kikelomo Akinyemi 
Hussein Mtumbei 
Hafsa Mtumbei 
Oyenike Oyelakin
Beatrice Adepoju
Busola Adepoju
Oreoluwa Ladoja

Table 29 ( Bride Family)
Lanre Keshinro
TJ Ishola-Ponle 
Ishola-Ponle 
ADEYINKA OLATUNJI
Esther Olaode 

Table 30 (Bride Family )
Ronke Green
Prebi Brisibe
Dammy Ilori
Bankole Obasanmi
Bunmi Aina
Yunus Kareem 
Sunkanmi
Farhia Huussein

Table 31 (Bride Family) 
Santanna Norwood 
Mercedes Mustapha 
Nolan
Irene 
Irene
Fatu Dalu-Zongar 

endOfString
"""

ineligibleNamesCounter = 0
ineligibleNamesArray = []
guestsJsonArray = []

current_seat_number = None

lines = [line.strip() for line in s.split("\n") if line.strip()]

i = 0
while i < len(lines):
    line = lines[i]

    # End condition
    if line == "endOfString":
        break

    # Detect table line
    if line.lower().startswith("table"):
        parts = line.split()
        for part in parts:
            if part.isdigit():
                current_seat_number = part
                break
        i += 1
        continue

    # Process guest line
    name_parts = line.split()

    if len(name_parts) == 2:
        guestsJsonArray.append({
            "fName": name_parts[0],
            "lName": name_parts[1],
            "seatNumber": current_seat_number
        })
    else:
        ineligibleNamesCounter += 1
        ineligibleNamesArray.append(line)

    i += 1

# Write output to txt file with proper JSON (double-quoted keys & values)
with open("output.txt", "w") as f:
    f.write("guestsJsonArray:\n")
    f.write(json.dumps(guestsJsonArray, indent=4))
    f.write("\n\n")

    f.write("ineligibleNamesArray:\n")
    f.write(json.dumps(ineligibleNamesArray, indent=4))
    f.write("\n\n")

    f.write("ineligibleNamesCounter:\n")
    f.write(json.dumps(ineligibleNamesCounter))

print("Processing complete. Output written to output.txt")