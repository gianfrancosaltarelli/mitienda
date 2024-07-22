function PageTitle({ title = "Demo Título", size = "4xl", color = "violet-400", marginBottom = 8 }) {
  const fontSizeClass = `text-${size}`;
  const colorClass = `text-${color}`;

  return (
    <h2 className={`${fontSizeClass} font-bold ${colorClass} mb-${marginBottom}`}>
      {title}
    </h2>
  );
}

export default PageTitle;
