param (
  [string]$day,
  [ValidateSet("dom", "console")]
  [string]$mode = "console"
)

$basePath = "week-1-js-core"

# Determine day name
if ($day -and $day -match '^day-\d+$') {
  $dayName = $day
}
else {
  $lastDay = Get-ChildItem $basePath -Directory `
    | Where-Object { $_.Name -match '^day-\d+$' } `
    | ForEach-Object { [int]($_.Name -replace 'day-', '') } `
    | Sort-Object -Descending `
    | Select-Object -First 1

  $nextDay = if ($lastDay) { $lastDay + 1 } else { 1 }
  $dayName = "day-{0:D2}" -f $nextDay
}

$dayPath = Join-Path $basePath $dayName

# Safety check
if (Test-Path $dayPath) {
  Write-Host "❌ $dayName already exists!"
  exit
}

# Create folder
New-Item -ItemType Directory -Path $dayPath | Out-Null

# README.md
@"
# $dayName

## Mode
$mode

## How to Run
$(
  if ($mode -eq "dom") {
    "Open index.html in your browser."
  } else {
    "Run: node index.js"
  }
)
"@ | Set-Content "$dayPath/README.md"

# Console mode
if ($mode -eq "console") {

@"
// $dayName – Console JS Challenge

console.log("$dayName ready!");
"@ | Set-Content "$dayPath/index.js"

}
else {

# DOM mode
@"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>$dayName</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>$dayName – DOM Challenge</h1>

  <script src="index.js"></script>
</body>
</html>
"@ | Set-Content "$dayPath/index.html"

@"
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
"@ | Set-Content "$dayPath/style.css"

@"
// $dayName – DOM JS Challenge

document.addEventListener("DOMContentLoaded", () => {
  console.log("$dayName DOM ready!");
});
"@ | Set-Content "$dayPath/index.js"

}

Write-Host "✅ $dayName created ($mode mode)"
