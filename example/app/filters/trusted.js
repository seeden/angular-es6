export default function trusted($sce) {
  return (text) => $sce.trustAsHtml(text);
}

trusted.$inject = ['$sce'];
