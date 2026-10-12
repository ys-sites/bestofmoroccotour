$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    'Referer' = 'https://unsplash.com/'
    'Accept' = 'image/webp,image/apng,image/*,*/*;q=0.8'
}

$downloads = @(
    @{
        Url  = 'https://images.unsplash.com/photo-1553432778-3b2d60571e20?w=1200&q=85&fm=jpg&fit=crop'
        File = 'public\images\jaal_riad_marrakech.jpg'
        Name = 'Marrakech Riad pool luxury'
    },
    @{
        Url  = 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=85&fm=jpg&fit=crop'
        File = 'public\images\imperial_cities_fes.jpg'
        Name = 'Fes Medina Morocco'
    },
    @{
        Url  = 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=85&fm=jpg&fit=crop'
        File = 'public\images\german_circuit_morocco.jpg'
        Name = 'German Circuit Morocco'
    }
)

foreach ($d in $downloads) {
    Write-Host "Downloading: $($d.Name)"
    try {
        Invoke-WebRequest -Uri $d.Url -Headers $headers -OutFile $d.File -TimeoutSec 30
        $size = (Get-Item $d.File).Length
        if ($size -lt 5000) {
            Write-Host "  FAILED - only $size bytes (likely blocked)" -ForegroundColor Red
        } else {
            Write-Host "  OK - $([math]::Round($size/1KB, 1)) KB" -ForegroundColor Green
        }
    } catch {
        Write-Host "  ERROR: $_" -ForegroundColor Red
    }
}

Write-Host "Done."
