[[plugins]]
  package = "@netlify/buildbot-extensions"
  [plugins.inputs]
    command = """

    npm install -g poetry" &&
    npm install -D @netlify/buildbot-extensions
"""

[build]
  publish = "public"
  command = """
    
    pip install -q poetry &&
    poetry config virtualenvs.in-project true &&
    poetry install -v &&
    jupyter lite build --output-dir public/live
  """

[build.environment]
  NODE_VERSION = "16"
  HUGO_VERSION = "0.109.0"
  HUGO_BASEURL = "/"
  PYTHON_VERSION = "3.11"

[[headers]]
  for = "/*" # This defines which paths this specific [[headers]] block will cover.

  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "same-origin"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
