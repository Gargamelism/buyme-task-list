ember build

rm ../resources/views/ember.php
rm -rf ../public/assets

cp dist/index.html ../resources/views/ember.php
cp -r dist/assets ../public/assets

echo "completed!"