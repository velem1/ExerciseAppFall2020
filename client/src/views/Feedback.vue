<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        <i class="fas fa-comments"></i>
        Provide Us Your Feedback
      </h1>
      <div class="notification has-background-warning-light">
        <h3 class="subtitle">Feedback Form</h3>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        
        <div class="field">
          <label class="label">Reason</label>
          <div class="control">
            <div class="select">
              <select>
                <option>General</option>
                <option>Concerns</option>
                <option>Positive</option>
                <option>Career Interest</option>
              </select>
            </div>
          </div>
        </div>
      
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Feedback"></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              Public
            </label>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>