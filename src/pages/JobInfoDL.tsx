import React, { FC, SetStateAction, useEffect, useState } from 'react';
import IContact from '../interfaces/page';
import '../components/styles/Contact.css';

const JobInfoDL: FC<IContact> = () => {
	const [pdf, setPdf] = useState(null);

	const downloadPdf = () => {
		fetch (`https://williamgriffin.pythonanywhere.com/api/v1/show`)
			.then(response => {
				const filename = response.headers.get('Content-Disposition')?.slice(21);
				// const filename = response.headers.get('Content-Disposition')?.split('filename=')[1];
      	response.blob()
				.then(blob => {
					let newBlob = new Blob([blob], {type: "application/pdf"});
					const data:SetStateAction<any>  = window.URL.createObjectURL(newBlob);
					setPdf(data)
					let link = document.createElement('a');
					link.href = data;
					link.download=filename ? filename : 'no-name.pdf'
					link.click();
				});
			});
	}

	return (
		<div>
			<button onClick={downloadPdf}>Download PDF</button>
			{pdf && <embed src={pdf} type="application/pdf" width="100%" height="600px" />}
		</div>
	);
}

export default JobInfoDL;
