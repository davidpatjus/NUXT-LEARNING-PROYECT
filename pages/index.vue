<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar color="surface" elevation="1">
      <v-container class="d-flex align-center">
        <v-app-bar-title class="text-primary font-weight-bold text-h4"
          >PAT'S APP</v-app-bar-title
        >
        <v-spacer></v-spacer>
        <v-btn variant="text" class="mx-2 border-md border-primary"
          >Features</v-btn
        >
        <v-btn variant="text" class="mx-2 border-md border-primary"
          >Pricing</v-btn
        >
        <v-btn variant="text" class="mx-2 border-md border-primary"
          >About</v-btn
        >
        <v-btn class="ml-4 border-md bg-primary text-secondary"
          >Get Started</v-btn
        >
      </v-container>
    </v-app-bar>

    <!-- Hero Section -->
    <v-main>
      <v-container class="py-16">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="text-center text-md-left">
            <h1 class="text-h2 font-weight-bold mb-4">PAT'S APP</h1>
            <p class="text-body-1 mb-8">
              Streamline your business operations with our powerful SaaS
              solution. Boost productivity and scale your business effortlessly.
            </p>
            <nuxt-link to="/dashboard">
              <v-btn color="primary" size="x-large" class="mr-4">
                Start Free Trial
                <v-icon right icon="$rocket" class="ml-2">$rocket</v-icon>
              </v-btn>
            </nuxt-link>
            <v-btn variant="outlined" size="x-large" color="secondary" class="border-primary ">
              Watch Demo
              <v-icon right class="ml-2">$play</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="https://img.freepik.com/free-photo/color-smoke-abstract-wallpaper-aesthetic-background-design_53876-128237.jpg?t=st=1739901445~exp=1739905045~hmac=0f7c5be88299270653daf1e872d698d59fbec2c34c8008974b78b0bc0e5b13a3&w=1380"
              class="rounded-xl"
              cover
            ></v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- Features Section -->
      <v-container class="py-16" color="surface">
        <h2 class="text-h4 text-center mb-12">Key Features</h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="h-100" color="surface" elevation="4">
              <v-card-text class="text-center">
                <v-icon color="primary" size="48" class="mb-4">$setup</v-icon>
                <h3 class="text-h6 mb-2">Quick Setup</h3>
                <p>
                  Get started in minutes with our intuitive onboarding process
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="h-100" color="surface" elevation="4">
              <v-card-text class="text-center">
                <v-icon color="primary" size="48" class="mb-4"
                  >$analytics</v-icon
                >
                <h3 class="text-h6 mb-2">Analytics</h3>
                <p>Powerful insights to help you make data-driven decisions</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="h-100" color="surface" elevation="4">
              <v-card-text class="text-center">
                <v-icon color="primary" size="48" class="mb-4"
                  >$security</v-icon
                >
                <h3 class="text-h6 mb-2">Security</h3>
                <p>Enterprise-grade security to protect your valuable data</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- CTA Section -->
      <v-container class="py-16">
        <v-card color="surface" elevation="4" class="text-center pa-12">
          <h2 class="text-h4 text-secondary mb-6">Ready to Get Started?</h2>
          <p class="text-body-1 mb-8">
            Join thousands of satisfied customers who trust our platform
          </p>
          <v-btn color="primary" size="x-large">
            Start Your Free Trial
            <v-icon right class="ml-2">$start</v-icon>
          </v-btn>
        </v-card>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-surface">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-4 text-primary">SaaSApp</h3>
            <p class="text-body-2">
              Making business operations simpler and more efficient.
            </p>
          </v-col>
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="6" md="4">
                <h4 class="text-subtitle-1 mb-4">Product</h4>
                <v-list density="compact" nav color="surface">
                  <v-list-item>Features</v-list-item>
                  <v-list-item>Pricing</v-list-item>
                  <v-list-item>Documentation</v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="4">
                <h4 class="text-subtitle-1 mb-4">Company</h4>
                <v-list density="compact" nav color="surface">
                  <v-list-item>About</v-list-item>
                  <v-list-item>Blog</v-list-item>
                  <v-list-item>Careers</v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="4">
                <h4 class="text-subtitle-1 mb-4">Support</h4>
                <v-list density="compact" nav color="surface">
                  <v-list-item>Help Center</v-list-item>
                  <v-list-item>Contact</v-list-item>
                  <v-list-item>Status</v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <div class="text-center text-body-2">
          © {{ new Date().getFullYear() }} SaaSApp. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup></script>
