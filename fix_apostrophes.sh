#!/bin/bash
# Fix all apostrophes in page.js
sed -i "s/kids' art programs/kids\&apos; art programs/g" src/app/page.js
sed -i "s/We're creating/We\&apos;re creating/g" src/app/page.js
sed -i "s/that's how we roll/that\&apos;s how we roll/g" src/app/page.js
sed -i "s/Leading our/Leading our/g" src/app/page.js
sed -i "s/Making sure/Making sure/g" src/app/page.js
sed -i "s/Keeping everyone/Keeping everyone/g" src/app/page.js
sed -i "s/Organizing all/Organizing all/g" src/app/page.js
sed -i "s/Connecting us/Connecting us/g" src/app/page.js
sed -i "s/neighbor-to-neighbor/neighbor-to-neighbor/g" src/app/page.js
