export const RenderHTML = ({ html }) => {
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
