# ==============================================================================
# Script de Desplegament i Sincronització amb GitHub Pages
# Projecte: Portal de Coneixement del Medi · SdA Hub
# ==============================================================================

Write-Host "🌍 [Portal Medi] Verificant compilació de VitePress..." -ForegroundColor Cyan

npm run docs:build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en compilar VitePress. Revisa els errors abans de pujar." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Compilació correcta!" -ForegroundColor Green

Write-Host "📦 Preparant canvis per a Git..." -ForegroundColor Cyan
git add .

$status = git status --porcelain
if (-not $status) {
    Write-Host "ℹ️ No hi ha canvis pendents per pujar." -ForegroundColor Yellow
    exit 0
}

$commitMsg = Read-Host "Escriu el missatge del commit (Intro per defecte: 'feat: actualitzacio portal medi')"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "feat: actualitzacio portal medi"
}

git commit -m $commitMsg

Write-Host "🚀 Pujant canvis a GitHub (main)..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Desplegament enviat correctament a GitHub!" -ForegroundColor Green
    Write-Host "👉 Comprova l'estat a: https://github.com/elCordones/projectes-medi/actions" -ForegroundColor Cyan
    Write-Host "🌐 Web en línia: https://elcordones.github.io/projectes-medi/" -ForegroundColor Yellow
} else {
    Write-Host "❌ Error en fer git push." -ForegroundColor Red
}
