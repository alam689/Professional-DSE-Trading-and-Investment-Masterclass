import * as XLSX from 'xlsx';

/**
 * Build and download a real .xlsx from a chapter's cell spec.
 *
 * The point is that the reader who does not code gets a *working* sheet — the
 * formula cells are live, so changing an input recalculates the verdict in
 * Excel or Google Sheets exactly as the chapter describes. A screenshot of a
 * formula teaches nothing; a sheet you can break and fix teaches the model.
 *
 * Cell spec entries:
 *   { cell: 'A1', v: 'Label' }        → literal text
 *   { cell: 'B1', v: 7.2 }            → literal number
 *   { cell: 'B3', f: 'B1/B2*100' }    → live formula
 */
export function downloadSheet({ filename, sheetName = 'Model', cells, colWidths }) {
  const ws = {};
  let maxR = 0;
  let maxC = 0;

  for (const spec of cells) {
    const addr = XLSX.utils.decode_cell(spec.cell);
    maxR = Math.max(maxR, addr.r);
    maxC = Math.max(maxC, addr.c);

    if (spec.f) {
      // Formula cells carry a cached value of 0; Excel recalculates on open.
      ws[spec.cell] = { t: 'n', f: spec.f, v: 0 };
    } else if (typeof spec.v === 'number') {
      ws[spec.cell] = { t: 'n', v: spec.v };
    } else {
      ws[spec.cell] = { t: 's', v: String(spec.v ?? '') };
    }
  }

  ws['!ref'] = XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: maxR, c: maxC } });
  ws['!cols'] = colWidths || [{ wch: 34 }, { wch: 18 }];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, filename);
}
