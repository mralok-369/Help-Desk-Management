import "../../../../Assets/css/admin/modal.css"
const SubmitQuerySolutionModal = ({cancelSubmitQuerySolutionModal}) => {
    return (
        <>
            <div class="modal-wrapper" ></div>
            <div class="container modal-container">
                <div class="row m-2">
                    <div class="text-center">
                        <h5 class="" >Submit Solution</h5>
                    </div>
                    <div class="">
                                <textarea placeholder='Write your Query Solution' rows="4" cols="56" >
                                </textarea>
                    </div>
                    <div class="">
                        <button type="button" class="btn btn-secondary m-2" onClick={cancelSubmitQuerySolutionModal}>Close </button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SubmitQuerySolutionModal;