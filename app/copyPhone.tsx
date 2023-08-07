import {AiFillPhone} from 'react-icons/ai'

const CopyPhone = () => {
    const handleCopyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const textToCopy = "(801)222-2222";

        // Create a temporary textarea to hold the text
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);

        // Select the text
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);

        // Optional: Notify the user that text has been copied
        alert(textToCopy + ' has been copied!');
    };

    return (
        <a href="#" 
           onClick={handleCopyClick} 
           className="hover:underline cursor-pointer flex items-center justify-center space-x-2 py-2">
            <span>(801)222-2222</span>
            <AiFillPhone />
        </a>
    );
};

export default CopyPhone;