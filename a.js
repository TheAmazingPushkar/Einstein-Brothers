<script>
        const SUPABASE_URL = "https://fglhsakunpkybtuiejck.supabase.co";
        const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbGhzYWt1bnBreWJ0dWllamNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1ODUwODYsImV4cCI6MjA5NDE2MTA4Nn0.xxUvivKvqUg6diOQQPNIMFAEBCQxZHfzWhwzEdD7UBM";
        const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        // API URL from your Render Deployment
        const API_URL = "https://test-deployment-j9e4.onrender.com";

        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = () => {
                const output = document.getElementById('preview');
                output.src = reader.result;
                output.style.display = 'block';
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        async function runInference() {
            const fileInput = document.getElementById('imageInput');
            if (fileInput.files.length === 0) return alert("Please select an image first");

            const btn = document.getElementById('predictBtn');
            btn.innerText = "Processing...";
            btn.disabled = true;

            const formData = new FormData();
            formData.append("file", fileInput.files[0]);

            try {
                const response = await fetch(API_URL, {
                    method: "POST",
                    body: formData
                });
                const data = await response.json();

                document.getElementById('resultArea').style.display = 'block';
                document.getElementById('label').innerText = data.class;
                document.getElementById('confidence').innerText = data.confidence;
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to connect to the AI model.");
            } finally {
                btn.innerText = "Analyze Animal";
                btn.disabled = false;
            }
            try {
            const response = await fetch(API_URL, {
            method: "POST",
            body: formData
            });
            const data = await response.json();
            // 1. Show the result card
            document.getElementById('resultArea').style.display = 'block';
            // 2. Set the text results
            document.getElementById('label').innerText = data.class;
            document.getElementById('confidence').innerText = data.confidence;
            // 3. SET THE HEATMAP IMAGE (The "Frontend 3" Core)
            const heatmapImg = document.getElementById('heatmapDisplay');
            heatmapImg.src = data.heatmap; // This is the Base64 string from FastAPI
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to the AI model.");
        }

        }

        async function signOut() {
            await supabase.auth.signOut();
            window.location.href = "index.html";
        }
    </script>