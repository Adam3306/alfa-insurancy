#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Antonio fonts
echo "Downloading Antonio fonts..."
curl -o public/fonts/Antonio-Regular.woff2 "https://fonts.gstatic.com/s/antonio/v11/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8StOyiHLh3c.woff2" 
curl -o public/fonts/Antonio-Regular.woff "https://fonts.gstatic.com/s/antonio/v11/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8StOyiHLh3c.woff" 
curl -o public/fonts/Antonio-Bold.woff2 "https://fonts.gstatic.com/s/antonio/v11/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8StOVSfLh3c.woff2" 
curl -o public/fonts/Antonio-Bold.woff "https://fonts.gstatic.com/s/antonio/v11/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8StOVSfLh3c.woff" 

# Download Telegraf fonts
echo "Downloading Telegraf fonts..."
curl -o public/fonts/Telegraf-Regular.woff2 "https://cdn.jsdelivr.net/npm/@typography/telegraf@1.0.0/telegraf-regular.woff2" 
curl -o public/fonts/Telegraf-Regular.woff "https://cdn.jsdelivr.net/npm/@typography/telegraf@1.0.0/telegraf-regular.woff" 
curl -o public/fonts/Telegraf-Bold.woff2 "https://cdn.jsdelivr.net/npm/@typography/telegraf@1.0.0/telegraf-bold.woff2" 
curl -o public/fonts/Telegraf-Bold.woff "https://cdn.jsdelivr.net/npm/@typography/telegraf@1.0.0/telegraf-bold.woff" 

# Download TT Interphases fonts
echo "Downloading TT Interphases fonts..."
curl -o public/fonts/TTInterphases-Regular.woff2 "https://cdn.jsdelivr.net/npm/tt-interphases@1.0.1/fonts/TTInterphases-Regular.woff2" 
curl -o public/fonts/TTInterphases-Regular.woff "https://cdn.jsdelivr.net/npm/tt-interphases@1.0.1/fonts/TTInterphases-Regular.woff" 
curl -o public/fonts/TTInterphases-Bold.woff2 "https://cdn.jsdelivr.net/npm/tt-interphases@1.0.1/fonts/TTInterphases-Bold.woff2" 
curl -o public/fonts/TTInterphases-Bold.woff "https://cdn.jsdelivr.net/npm/tt-interphases@1.0.1/fonts/TTInterphases-Bold.woff" 

echo "All fonts downloaded to public/fonts directory." 