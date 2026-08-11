[CmdletBinding()]
param(
    [string]$LibraryRoot
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if (-not $LibraryRoot) {
    $LibraryRoot = Split-Path -Parent $PSScriptRoot
}

$entregasDir = Join-Path -Path $LibraryRoot -ChildPath 'ejemplos\entregas'
$manifestPath = Join-Path -Path $LibraryRoot -ChildPath 'data\entregas.js'

if (-not (Test-Path -Path $entregasDir)) {
    New-Item -ItemType Directory -Path $entregasDir -Force | Out-Null
}

function ConvertTo-EntregaTitle {
    [CmdletBinding()]
    param([Parameter(Mandatory = $true)][string]$BaseName)

    $title = ($BaseName -replace '[-_]+', ' ').Trim()
    if ($title.Length -gt 0) {
        $title = $title.Substring(0, 1).ToUpper() + $title.Substring(1)
    }
    return $title
}

$files = @(Get-ChildItem -Path $entregasDir -Filter '*.html' -File | Sort-Object -Property Name)

$items = @(foreach ($f in $files) {
    [pscustomobject]@{
        file  = 'ejemplos/entregas/' + $f.Name
        title = ConvertTo-EntregaTitle -BaseName ([IO.Path]::GetFileNameWithoutExtension($f.Name))
        fecha = $f.LastWriteTime.ToString('yyyy-MM-dd')
    }
})

$json = ConvertTo-Json -InputObject $items -Compress
if ($items.Count -eq 0) { $json = '[]' }

$content = "// Generado por herramientas/actualizar-entregas.ps1 - no editar a mano.`n" +
    "window.GC_ENTREGAS = $json;`n"
[IO.File]::WriteAllText($manifestPath, $content, (New-Object -TypeName Text.UTF8Encoding -ArgumentList $true))
Write-Host ("Manifiesto actualizado: {0} entrega(s) listadas en data/entregas.js" -f $items.Count)
