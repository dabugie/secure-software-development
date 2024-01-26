import { developmentBases, secutiryConcepts } from '../../lib/data';

export const GET = async ({ request }: any) => {
	const { url } = request;
	const uriObject = new URL(url);
	const id = uriObject.searchParams.get('id');

	const concepts = developmentBases.find((concept) => concept.id === id);
	const bases = secutiryConcepts.find((base) => base.id === id);

	return new Response(JSON.stringify(concepts || bases), {
		headers: { 'Content-Type': 'application/json' },
	});
};
