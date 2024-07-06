No Back-End Parsing

It is missing a few tries and catches but it's very simplified and straightforward.
It holds merit as it can avoid running CSRF check fails for it runs only on the front-end not the back-end.

The main project handles a graphQL get request using cookies. However the request does yield
HTML so it also combines parsing.

There's one more protocol I intended to implement which tracks JSON files immediately but that ran 
headfirst into CSRF check fails. Let me know if there's a work around because it just feel much more 
efficient. I also have a Profile Page get script using this method that I can share. 