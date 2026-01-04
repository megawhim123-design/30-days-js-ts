param([string]$day)

$folder = "day-$day"

mkdir $folder
New-Item "$folder/index.js" -ItemType File
New-Item "$folder/README.md" -ItemType File

Write-Host "$folder created successfully"

