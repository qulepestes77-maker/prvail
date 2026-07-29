{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
    "baran-wang.vscode-theme-jetbrains-new-ui"
  ];
  idx.previews = {
    web = {
      command = [
        "npm"
        "run"
        "dev"
        "--"
        "--port"
        "$PORT"
        "-H"
        "0.0.0.0"
      ];
      manager = "web";
    };
  };
}