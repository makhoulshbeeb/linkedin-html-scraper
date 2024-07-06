No Back-End Parsing

The is missing a few tries and catches but it's very simplified and straightforward.
It holds merit as it can avoid running CSRF check fails as it runs on the front-end not the back-end.

The main project the main project handles a graphQL get request using cookies. The request does yield
HTML however so it also combines parsing.

There's one more protocol I intended to implement which tracks JSON files immediately but that ran 
headfirst into CSRF check fails. Let me know if there's a work around because it just feel much more 
efficient.