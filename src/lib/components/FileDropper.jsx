import {useEffect, useState} from "react";
import clsx from "clsx";
import '../scss/app.scss';

import {ReactComponent as FileCheckSvg} from "../images/file-check.svg";
import {ReactComponent as WrongFileSvg} from "../images/wrong-file.svg";
import {ReactComponent as ExcelSvg} from "../images/microsoft-excel.svg";

function FileDropper({
	 callbackFile,
	 containerClasses = [],
	 blockClasses = [],
	 acceptFiles = '',
	 fileSize = 104857600,
}) {

	const [dragging, setDragging] = useState(false);
	const [error, setError] = useState('');
	const [selectedFile, setSelectedFile] = useState({});

	useEffect(() => {
		const div = document.getElementById('dropped-block');
		div.addEventListener('dragenter', handleDragIn)
		div.addEventListener('dragleave', handleDragOut)
		div.addEventListener('dragover', handleDrag)
		div.addEventListener('drop', handleDrop)
	})

	useEffect(() => {
		return () => {
			const div = document.getElementById('dropped-block');
			div?.removeEventListener('dragenter', handleDragIn)
			div?.removeEventListener('dragleave', handleDragOut)
			div?.removeEventListener('dragover', handleDrag)
			div?.removeEventListener('drop', handleDrop)
		}
	})

	const handleDrag = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setDragging(true)
	}
	const handleDragIn = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setDragging(false)
	}
	const handleDragOut = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setDragging(false)
	}
	const handleDrop = (e) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			upload(e.dataTransfer)
			e.dataTransfer.clearData()
		}
		setDragging(false)
	}

	const upload = (target) => {
		const file = target?.files[0];

		if (file) {
			if (acceptFiles.includes(file.type)) {
				if (file.size > fileSize)
					setError(`Максимально допустимый размер файла не более ${fileSize}`);
				else {
					setSelectedFile(file);
					callbackFile(file);
				}
			} else setError('Не верный формат файла')
		}
	}

	return (
		<div className={clsx('uploader', [...containerClasses])}>
			<div
				className={clsx('uploader__block', {'uploader__block_dragging': dragging}, [...blockClasses])}
				onClick={() => document.getElementById('input-file-uploader').click()}
				id={'dropped-block'}
			>
				<ExcelSvg width={40} height={40} fill={'#545454'}/>
				{(!selectedFile.name && !error) &&
					(<p className={'mt-3'}>
						Для загрузки файла кликните на выделенную
						область или перетащите документы с вашего устройства
					</p>)
				}
				{selectedFile.name &&
					(<div>
						<p><b>Имя: {selectedFile.name}</b></p>
						<span className={'d-flex align-items-center justify-content-center mt-2'}>
							<FileCheckSvg width={20} height={20} fill={'green'}/>
							<p className={'ms-2'}><b>Валидный файл</b></p>
						</span>

					</div>)
				}
				{error &&
					<span className={'d-flex align-items-center justify-content-center mt-2'}>
						<WrongFileSvg width={20} height={20} fill={'#bb2d3b'}/>
						<p className={'ms-2'}><b>{error}</b></p>
					</span>
				}
			</div>
			<input
				type="file"
				className={'d-none'}
				id={'input-file-uploader'}
				onChange={(e) => upload(e.target)}
				accept={acceptFiles}
			/>
		</div>
	);
}

export default FileDropper;
