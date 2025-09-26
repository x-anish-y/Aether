document.getElementById('copyBtn').addEventListener('click', function() {
        
            const htmlContent = document.documentElement.outerHTML;
            
           
            const textarea = document.createElement('textarea');
            textarea.value = htmlContent;
            document.body.appendChild(textarea);
            
        
            textarea.select();
            document.execCommand('copy');
            
          
            document.body.removeChild(textarea);
            
           
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            
        
            setTimeout(function() {
                toast.classList.remove('show');
            }, 3000);
        });