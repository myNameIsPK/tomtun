import React from "react";

export default function Menu(props) {
  return (
    <div className="side-menu">
      <ul className="step-list">
        <li>
          Step 1: เลือกข้าวหรือเส้น
          <div>
            <input type="radio" name="step1" id="rice" />
            <label htmlFor="rice">ข้าว</label>
            <input type="radio" name="step1" id="mama" />
            <label htmlFor="mama">เส้นมาม่า</label>
          </div>
        </li>
        <li>
          Step 2: เลือกเนื้อสัตว์
          <div>
            <input type="radio" name="step2" id="pork" />
            <label htmlFor="pork">หมูตุ๋น</label>
            <input type="radio" name="step2" id="beef" />
            <label htmlFor="beef">เนื้อตุ๋น</label>
          </div>
        </li>

        <li>
          Step 3: เลือกวิธีปรุง
          <div>
            <input type="radio" name="step3" id="basil" />
            <label htmlFor="basil">ผัดกระเพรา</label>
            <input type="radio" name="step3" id="kerry" />
            <label htmlFor="kerry">ผัดผงกระหรี่</label>
          </div>
        </li>
      </ul>
      <div className="aunt-dialogue">
        <textarea name="aunt" id="aunt" cols="30" rows="10">
          วันนี้กินอะไรดีจ๋ะ
        </textarea>
      </div>
      <input className="Confirm-btn" type="button" value="Confirm" />
      <input className="Restart-btn" type="button" value="Restart" />
    </div>
  );
}
