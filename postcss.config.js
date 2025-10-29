module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
4. **Commit**

### **3.5 - Crear .gitignore**
1. **"Add file" → "Create new file"**
2. Nombre: `.gitignore`
3. Contenido:
```
node_modules
/.next/
/out/
.DS_Store
*.pem
.env*.local
.vercel
