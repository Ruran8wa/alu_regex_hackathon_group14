import re


response_string = """
Here are some movie titles: 
- The Matrix (1999)
- Inception (2010)
- Interstellar (2014)
- Avengers: Endgame (2019)
- Spider-Man: Into the Spider-Verse (2018)
- Avatar (2009)
"""

pattern = r"\n- |\s\((\d{4})\)"


movie_info = re.split(pattern, response_string)

movie_titles = [title.strip() for title in movie_info[1::2]]
years = movie_info[2::2]


for title, year in zip(movie_titles, years):
    print("Title:", title, "| Year:", year)
