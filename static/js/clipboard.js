// Clipboard functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks (including Hugo's Chroma highlighter)
    const highlightContainers = document.querySelectorAll('.highlight, pre');
    
    highlightContainers.forEach(function(container) {
        // Skip if this container already has a copy button
        if (container.querySelector('.copy-button')) {
            return;
        }
        
        // Find the actual code element inside this container
        const codeElement = container.querySelector('code') || container.querySelector('pre code');
        if (!codeElement) {
            return;
        }
        
        // Skip inline code elements (not in pre blocks)
        const preElement = codeElement.closest('pre');
        if (!preElement) {
            return;
        }
        
        // Use the highlight container if it exists, otherwise use the pre element
        const targetContainer = container.classList.contains('highlight') ? container : preElement;
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.title = 'Copy to clipboard';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        
        // Position the container relatively
        targetContainer.style.position = 'relative';
        
        // Add click event
        copyButton.addEventListener('click', function() {
            // Get the text content of the code block
            const textToCopy = codeElement.textContent || codeElement.innerText;
            
            // Copy to clipboard
            if (navigator.clipboard && window.isSecureContext) {
                // Use modern clipboard API
                navigator.clipboard.writeText(textToCopy).then(function() {
                    showCopyFeedback(copyButton, true);
                }).catch(function(err) {
                    console.error('Failed to copy: ', err);
                    fallbackCopyTextToClipboard(textToCopy, copyButton);
                });
            } else {
                // Fallback for older browsers
                fallbackCopyTextToClipboard(textToCopy, copyButton);
            }
        });
        
        // Add button to the target container
        targetContainer.appendChild(copyButton);
    });
    
    // Fallback copy function for older browsers
    function fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            showCopyFeedback(button, successful);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            showCopyFeedback(button, false);
        }
        
        document.body.removeChild(textArea);
    }
    
    // Show visual feedback when copying
    function showCopyFeedback(button, success) {
        const originalIcon = button.innerHTML;
        
        if (success) {
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.classList.add('copied');
            button.title = 'Copied!';
        } else {
            button.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            button.classList.add('copy-error');
            button.title = 'Copy failed';
        }
        
        // Reset after 2 seconds
        setTimeout(function() {
            button.innerHTML = originalIcon;
            button.classList.remove('copied', 'copy-error');
            button.title = 'Copy to clipboard';
        }, 2000);
    }
});