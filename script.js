document.addEventListener('DOMContentLoaded', function() {
    const text = "¡Feliz octavo mes de aniversario, mi amor! 🥳💖 Es increíble pensar en todo lo que hemos compartido en este tiempo tantas risas 🤣, sonrisas 😊, y recuerdos que guardo con mucho cariño en mi corazón ❤️. Cada momento a tu lado se siente como una hermosa aventura 🏞️, llena de amor 💕 y felicidad 🌟. Desde nuestras bromas juguetonas 🤭 hasta las pequeñas cosas que hacemos para apoyarnos mutuamente 🤗, he atesorado cada segundo contigo. Tu amabilidad 😇, sentido del humor 😂, y cuidado iluminan mi vida de maneras que nunca supe que eran posibles 🌈. Me encanta la forma en que podemos hablar de cualquier cosa 💬, compartir nuestros sueños 🌠 y nuestros chistes tontos 🤪. Son esos pequeños momentos, la magia cotidiana que creamos juntos ✨, los que me hacen enamorarme de ti más y más cada día 💘. Gracias por ser mi pareja 💑, mi confidente 🤝 y mi mejor amiga 🥰. Tienes una manera de hacer que incluso los días más simples sean especiales 🌞, y por eso estoy eternamente agradecido 🙏. Espero con ansias todos los meses y años futuros contigo 🗓️, seguir creciendo juntos 🌱 y crear nuestra hermosa historia 📖. Brindemos 🥂 por nosotros, por el amor ❤️ y por el increíble viaje que tenemos por delante 🚀. Te amo más de lo que las palabras pueden expresar 💖, y estoy tan agradecido de tenerte en mi vida 🙌. Siempre tuyo,  L";
    const dynamicTextElement = document.getElementById('dynamic-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            dynamicTextElement.textContent += text.charAt(index);
            dynamicTextElement.scrollTop = dynamicTextElement.scrollHeight; // Desplazamiento automático hacia abajo
            index++;
            setTimeout(typeText, 100); // Ajusta la velocidad de escritura
        }
    }

    typeText();
});
