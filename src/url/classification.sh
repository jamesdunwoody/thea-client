FILENAME="path/to/file/test.jpeg"; \
FILE_CONTENT=$( base64 $FILENAME ); \
echo "{ \"filename\": \"$FILENAME\", \"b64\": \"$FILE_CONTENT\" }" | \
curl --header "x-api-key: XXXXXX" \
      --header "Content-Type: application/json" \
      --data-binary @- \
    	https://url/document/preprocess | \
curl --header "x-api-key: XXXXXX" \
      --data-binary @- \
https://url/document/classify
