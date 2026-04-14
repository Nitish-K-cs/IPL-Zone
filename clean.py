import unicodedata

input_file = "prem_stats.csv"
output_file = "cleaned.csv"

def clean_text(text):
    # Normalize (é → e, ñ → n, etc.)
    text = unicodedata.normalize('NFKD', text)
    text = text.encode('ascii', 'ignore').decode('ascii')

    # Replace weird dashes with normal dash
    text = text.replace("–", "-").replace("—", "-")

    return text

with open(input_file, "r", encoding="latin1", errors="ignore") as f:
    lines = f.readlines()

cleaned_lines = [clean_text(line) for line in lines]

with open(output_file, "w", encoding="utf-8") as f:
    f.writelines(cleaned_lines)

print("Cleaned file saved as cleaned.csv")