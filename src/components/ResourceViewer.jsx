const ResourceViewer = ({ resource }) => {
  if (resource.tipo_recurso === "video") {
    return (
      <div>
        <h4>{resource.nome}</h4>
        <video width="480" controls>
          <source src={resource.url} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <div>
          <a href={resource.url} download>
            ⬇️ Download do vídeo
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4>{resource.nome}</h4>
      <p>{resource.descricao}</p>
      <a href={resource.url} download>⬇️ Download</a>
    </div>
  );
};

export default ResourceViewer;
