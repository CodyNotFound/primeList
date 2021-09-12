function prime(n) {
    let vis = new Array();
    let pri = new Array();
    let m = 0;
    for (let i = 2; i <= n; i++) {
        if (!vis[i]) pri[++m] = i;
        for (let j = 1; j <= m && i * pri[j] <= n; j++) {
            vis[i * pri[j]] = true;
            if (i % pri[j] == 0) break;
        }
    }
    for (let i = 1; i <= m; i++)
        console.log(pri[i]);
}

prime(process.argv[2]);
