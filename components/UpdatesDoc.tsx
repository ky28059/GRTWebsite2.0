import {createContext, useContext} from 'react';
import {docs_v1} from 'googleapis';


type GlobalDocumentData = Pick<docs_v1.Schema$Document, 'inlineObjects'> & {parsedUris: {[key: string]: string}}
const DocumentContext = createContext<GlobalDocumentData>({parsedUris: {}});

// The parsed Google Docs api response from `getStaticProps()`. `parsedUris` is an object containing parsed
// base64 image URIs, keyed by inline object ID.
export type UpdatesDocProps = {
    document: docs_v1.Schema$Document,
    parsedUris: {[key: string]: string}
};
export default function UpdatesDoc(props: UpdatesDocProps) {
    const {document, parsedUris} = props;
    return (
        <section className="whitespace-pre-wrap max-w-4xl mx-auto">
            <DocumentContext.Provider value={{inlineObjects: document.inlineObjects, parsedUris}}>
                {document.body?.content?.map(element => (
                    <StructuralElement {...element} key={element.startIndex} />
                ))}
            </DocumentContext.Provider>
        </section>
    )
}

// Renders a structural element corresponding to the given `Schema$StructuralElement`.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$StructuralElement.html
function StructuralElement(props: docs_v1.Schema$StructuralElement) {
    if (props.table) return <Table {...props.table} />;
    if (props.paragraph) return <Paragraph {...props.paragraph} />;
    return null;
}

// Renders a <table> from a `Schema$Table` object.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$Table.html
function Table(props: docs_v1.Schema$Table) {
    return (
        <table className="w-full">
            <tbody>
                {props.tableRows?.map(row => (
                    <TableRow {...row} key={row.startIndex} />
                ))}
            </tbody>
        </table>
    )
}

// Renders a <tr> from a `Schema$TableRow` object.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$TableRow.html
function TableRow(props: docs_v1.Schema$TableRow) {
    return (
        <tr>
            {props.tableCells?.map(cell => (
                <TableCell {...cell} key={cell.startIndex} />
            ))}
        </tr>
    )
}

// Renders a <td> from a `Schema$TableCell` object.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$TableCell.html
function TableCell(props: docs_v1.Schema$TableCell) {
    return (
        <td className="p-2 border border-gray-600" style={{backgroundColor: parseColor(props.tableCellStyle?.backgroundColor)}}>
            {props.content?.map(element => (
                <StructuralElement {...element} key={element.startIndex} />
            ))}
        </td>
    )
}

// Renders a heading or paragraph from a `Schema$Paragraph` object.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$Paragraph.html
function Paragraph(props: docs_v1.Schema$Paragraph) {
    if (props.paragraphStyle?.headingId) return (
        <h3 className="font-medium text-2xl text-center mb-4">
            {props.elements?.map(element => (
                <ParagraphElement {...element} key={element.startIndex} />
            ))}
        </h3>
    );

    return (
        <p className={'font-light' + (props.paragraphStyle?.alignment === 'CENTER' ? ' text-center' : props.paragraphStyle?.alignment ==='END' ? ' text-right' : '')}>
            {props.elements?.map(element => (
                <ParagraphElement {...element} key={element.startIndex} />
            ))}
        </p>
    )
}

// Renders a paragraph element corresponding to the given `Schema$ParagraphElement`.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$ParagraphElement.html
function ParagraphElement(props: docs_v1.Schema$ParagraphElement) {
    if (props.horizontalRule) return <hr />
    if (props.textRun) return <TextRun {...props.textRun} />;
    if (props.inlineObjectElement) return <InlineObject {...props.inlineObjectElement} />
    return null;
}

// Renders a "run of text with the same styling" corresponding to the given `Schema$TextRun`.
// https://googleapis.dev/nodejs/googleapis/latest/docs/interfaces/Schema$TextRun.html
function TextRun(props: docs_v1.Schema$TextRun) {
    let content = <>{props.content}</>;
    if (props.textStyle?.bold) content = <strong>{content}</strong>;
    if (props.textStyle?.italic) content = <em>{content}</em>;
    if (props.textStyle?.underline) content = <u>{content}</u>;
    if (props.textStyle?.strikethrough) content = <s>{content}</s>;
    if (props.textStyle?.baselineOffset === 'SUPERSCRIPT') content = <sup>{content}</sup>
    if (props.textStyle?.baselineOffset === 'SUBSCRIPT') content = <sub>{content}</sub>
    if (props.textStyle?.link?.url)
        content = <a href={props.textStyle.link.url} target="_blank" rel="noopener noreferrer">{content}</a>
    return content;
}

function InlineObject(props: docs_v1.Schema$InlineObjectElement) {
    const {inlineObjects, parsedUris} = useContext(DocumentContext);
    if (!inlineObjects || !props.inlineObjectId) return null;

    const object = inlineObjects[props.inlineObjectId].inlineObjectProperties?.embeddedObject;
    if (object) return (
        <img
            src={parsedUris[props.inlineObjectId]}
            alt={(object.title && object.description) ? `${object.title}: ${object.description}` : object.title ?? object.description ?? 'Unknown docs image'}
            className="inline mb-1"
        />
    )

    return null;
}

function parseColor(color?: docs_v1.Schema$OptionalColor) {
    if (!color) return;
    const rgb = color.color?.rgbColor;
    return `rgb(${(rgb?.red ?? 1) * 255} ${(rgb?.green ?? 1) * 255} ${(rgb?.blue ?? 1) * 255})`;
}
