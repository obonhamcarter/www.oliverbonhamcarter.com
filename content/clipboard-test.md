---
title: "Clipboard Test"
date: 2024-10-25T12:30:00Z
draft: false
---

## Clipboard Functionality Test

This page tests the clipboard functionality for code blocks.

## Python Example

```python
def hello_world():
    print("Hello, World!")
    return "success"

# Test the function
result = hello_world()
print(f"Result: {result}")
```

## JavaScript Example

```javascript
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
```

## HTML Example

```html
<div class="container">
    <h1>Hello World</h1>
    <p>This is a test paragraph.</p>
    <button onclick="copyToClipboard('Hello World')">Copy</button>
</div>
```

## Bash/Shell Example

```bash
#!/bin/bash
echo "Starting backup process..."
cp -r /home/user/documents /backup/
echo "Backup completed successfully!"
```

Each code block above should have a copy button in the top-right corner with a copy icon. When clicked, it should copy the code to your clipboard and show a green checkmark for 2 seconds.
