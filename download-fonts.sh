#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# List of fonts to download
# Replace these URLs with actual font URLs when available
# These are placeholder URLs for demonstration purposes only

echo "Downloading Antonio fonts..."
curl -o public/fonts/Antonio-Regular.woff2 "https://fonts.gstatic.com/s/antonio/v16/gNMbW3NwSYq_9WD34ngK5wGjSMY.woff2"
curl -o public/fonts/Antonio-Bold.woff2 "https://fonts.gstatic.com/s/antonio/v16/gNMhW3NwSYq_9WD3yLRJ64SoOFM.woff2"

# Since Telegraf and TT Interphases are premium/commercial fonts,
# they would need to be purchased or licensed.
# Please purchase the fonts and place them in the public/fonts directory

echo "Fonts downloaded!"
echo "NOTE: Telegraf and TT Interphases are commercial fonts and need to be purchased separately."
echo "Please add them manually to the public/fonts directory." 