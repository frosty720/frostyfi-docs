import type { Metadata } from 'next'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import type { FC } from 'react'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
import { DEFAULT_DESCRIPTION, SITE_NAME } from '../../site'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

type PageProps = Readonly<{
	params: Promise<{
		mdxPath?: string[]
		lang: string
	}>
}>

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const params = await props.params
	const { metadata } = await importPage(params.mdxPath, params.lang)
	const isHome = !params.mdxPath?.length
	// Pages can set their own `description:` in front matter; the rest share
	// the site default so every page still ships a meta description.
	const description = metadata.description || DEFAULT_DESCRIPTION
	return {
		...metadata,
		title: isHome ? { absolute: SITE_NAME } : metadata.title,
		description,
		openGraph: { title: SITE_NAME, description },
	}
}

const Wrapper = getMDXComponents().wrapper

const Page: FC<PageProps> = async (props) => {
	const params = await props.params
	const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath, params.lang)
	return (
		<Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
			<MDXContent {...props} params={params} />
		</Wrapper>
	)
}

export default Page
